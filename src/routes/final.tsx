import { useNavigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { quizOutcomes } from "../constants/quiz";

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 100) {
      edges {
        node {
          id
          slug
          name
          databaseId
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
          ... on SimpleProduct {
            price
            content
          }
          ... on VariableProduct {
            price
            content
          }
        }
      }
    }
  }
`;

export default function FinalQuiz({}) {
  const { tratamento, parte } = useParams();
  const navigate = useNavigate();

  const findProducts = (tratamento: string) => {
    return quizOutcomes.find(
      (item) =>
        item.area.toUpperCase() === tratamento.toUpperCase() &&
        item.parte === parte
    )?.produtos;
  };

  const { data, loading } = useQuery(GET_PRODUCTS);

  const filteredProducts = data?.products?.edges?.map((product: any) => {
    return {
      slug: product.node.slug,
      name: product.node.name,
      databaseId: product.node.databaseId,
      image: product.node.image,
      galleryImages: product.node.galleryImages,
      price: product.node.price,
      content: product.node.content,
    };
  });

  const tratamentoProducts = filteredProducts?.filter((product: any) => {
    return findProducts(tratamento!)?.includes(product.databaseId);
  });

  if (loading) return <p>Carregando resultado...</p>;

  return (
    <section>
      <div className="flex flex-col justify-center align-middle  p-5 fixed top-0 right-0 left-0 mx-auto mb-12 bg-white">
        <h2
          className="text-center text-2xl uppercase text-[#d7a3ab] font-bold"
          id="poppins-text"
        ></h2>
        <h1
          className="sm:text-2xl text-lg my-5 text-[#384967]"
          id="playfair-text"
        >
          Este é o tratamento que nós indicamos especialmente para você:
        </h1>
      </div>
      <div className="w-full bg-transparent sm:h-full mt-40 sm:mt-20 mb-5 overflow-y-auto flex md:flex-row md:flex-wrap flex-col flex-nowrap mx-auto items-center md:items-stretch justify-center gap-12">
        {tratamentoProducts?.map((product: any) => {
          return (
            <div
              className="flex flex-col justify-between w-full md:w-52"
              key={product?.databaseId}
            >
              <div className="relative">
                <img
                  src={product?.image?.sourceUrl}
                  alt={product?.image?.altText}
                  width={320}
                  height={320}
                  className="mx-auto relative object-cover w-full h-80 rounded-md"
                />
                <div className="absolute top-0 left-0 bg-[#F38790]/20 opacity-70 rounded-md w-full h-full"></div>
              </div>
              <div>
                <h3
                  id="poppins-text"
                  className="text-center text-lg my-1 text-[#384967]"
                >
                  {product?.name}
                </h3>
                <p
                  id="poppins-text"
                  className="text-center text-lg text-[#384967] font-bold my-2"
                >
                  {product?.price}
                </p>
              </div>
              <div>
                <a
                  href={`https://lestee.com.br/?add-to-cart=${product?.databaseId}&quantity=1`}
                  target="_top"
                >
                  <button
                    id="poppins-text"
                    className="bg-[#D7A3AB] text-white py-[15px] px-2 rounded-[2px] text-[14px] uppercase w-full mx-auto cursor-pointer hover:opacity-80 transition-all ease-in-out duration-100"
                  >
                    Adicionar ao carrinho
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => navigate("/")}
          id="poppins-text"
          className="border-[#D7A3AB] w-full border-2 text-[#D7A3AB] hover:text-white hover:bg-[#D7A3AB] text-[15px] uppercase p-[15px] rounded-[5px] md:w-1/3 mx-auto cursor-pointer transition-all ease-in-out duration-200"
        >
          Reiniciar Quiz
        </button>
      </div>
    </section>
  );
}
