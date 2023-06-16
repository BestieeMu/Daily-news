import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { Related } from "../../Components/Card";

const NewBody = () => {
  const [newsDetail, setNewsDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
  title,
  body,
  mainImage{
    asset ->{
       _id,
       url
    },
    alt
  }
  ,
  publishedAt
  }`
      )
      .then((data) => setNewsDetail(data[0]))
      .catch(console.error);
    setIsLoading(false);
  }, [slug]);

  return (
    <div className="pb-20">
      {isLoading ? (
        ("loading...")
      ) : (
        <section className="flex flex-col items-center mt-10">
          <div className="w-10/12 py-5 ">
            <h1 className="text-5xl font-bold  "> {newsDetail.title}</h1>
            <p className="mt-3">{newsDetail.publishedAt}</p>
          </div>

          {newsDetail.mainImage && newsDetail.mainImage.asset && (
            <img
              src={newsDetail.mainImage.asset.url}
              alt={newsDetail.title}
              title={newsDetail.title}
              className="w-11/12 rounded-md mt-10 "
              style={{ height: "600px" }}
            />
          )}

          <div className="mt-10 w-9/12 text-2xl leading-10 break-words p-2 text-start">
            <BlockContent
              blocks={newsDetail.body}
              projectId="g748rhyo"
              dataset="production"
            />
          </div>
        </section>
      )}
      <Related />
    </div>
  );
};

export default NewBody;
