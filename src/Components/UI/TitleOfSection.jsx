function TitleOfSection({ span, title }) {
  return (
    <div>
      <p className="lg:text-4xl text-xl text-color3 font-semibold tracking-widest">
        <span className="text-color4 font-medium lg:text-2xl text-lg">
          {span}
        </span>{" "}
        {title}
      </p>
    </div>
  );
}

export default TitleOfSection;
