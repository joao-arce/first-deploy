import { Card } from "./Card";

export const Services = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-12">
        <h2 className="mb-8 text-3xl text-center text-white ">
          Nossos Serviços
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-col-3">
          <Card />
        </div>
      </div>
    </section>
  );
};
