import React from "react";
import CardDisplay from "./card/CardDisplay";
import CommentsDisplay from "./comments/CommentsDisplay";
import MainBlogsDisplay from "./mainBlogs/MainBlogsDisplay";
import MainGuide from "./mainGuide/MainGuide";
import BookNow from "./bookNow/BookNow";

const Main = () => {
  return (
    <main>
      <CardDisplay />
      <CommentsDisplay />
      <MainBlogsDisplay />
      <MainGuide />
      <BookNow />
    </main>
  );
};

export default Main;
