import Card from "./Card";

export function CarouselDefault() {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center rounded-xl md:w-3/4 gap-2">
      <Card
        h2={"Web Development"}
        p={
          "Craft interactive websites and web applications tailored to your needs. From user-friendly interfaces to dynamic functionalities, our web development services bring your online vision to life."
        }
        link={"/"}
      />
      <Card
        h2={"App Development"}
        p={
          "Create powerful, feature-rich mobile apps for iOS and Android platforms. Our app development expertise ensures your ideas are transformed into engaging and functional mobile experiences."
        }
        link={"/"}
      />
      <Card
        h2={"Prototype Development"}
        p={
          "Rapidly transform your concepts into tangible prototypes. Our prototype development services help you visualize and refine your ideas, accelerating the path to innovative solutions."
        }
        link={"/"}
      />
    </div>
  );
}
