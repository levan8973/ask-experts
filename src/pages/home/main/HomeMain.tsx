import React from "react";
import HeaderContent from "./headerContent/HeaderContent";
import CardDisplay from "./card/CardDisplay";
import CommentsDisplay from "./comments/CommentsDisplay";
import MainBlogsDisplay from "./mainBlogs/MainBlogsDisplay";
import MainGuide from "./mainGuide/MainGuide";
import BookNow from "./bookNow/BookNow";

const HomeMain: React.FC = () => {
  return (
    <main>
      <HeaderContent />
      <CardDisplay />
      <CommentsDisplay />
      <MainBlogsDisplay />
      <MainGuide />
      <BookNow />
    </main>
  );
};

export default HomeMain;
