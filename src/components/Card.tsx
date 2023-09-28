// import { FaCarBattery } from "react-icons/fa";
// import { GiCarWheel } from "react-icons/gi";

type cardProps = {
  id: number;
  urlImg: string;
  title: string;
  description: string;
};

export const Card = () => {
  const ourServices: cardProps[] = [
    {
      id: 1,
      urlImg: "./src/assets/car-oil.png",
      title: "Troca de Óleo",
      description:
        "O óleo do carro é essencial para lubrificar, limpar e refrigerar o motor, e tem seu desempenho prejudicado quando não é trocado no prazo correto.",
    },
    {
      id: 2,
      urlImg: "./src/assets/car-oil.png",
      title: "Alinhamento",
      description:
        "O alinhamento 3D reduz o desgaste dos pneus e contribui para aumentar a vida útil dos pneus e melhora a economia de combustível.",
    },
    {
      id: 3,
      urlImg: "./src/assets/car-oil.png",
      title: "Balanceamento",
      description:
        "O Balanceamento de rodas consiste em equilibrar o excesso ou má distribuição de massas no conjunto pneu e roda trazendo segurança para seu carro.",
    },
    {
      id: 4,
      urlImg: "./src/assets/car-oil.png",
      title: "Troca de Baterias",
      description:
        "Muitas pessoas não sabem a hora ideal de trocá-la e, por isso, acabam passando por problemas, aqui realizamos o processo de instalação pra você.",
    },
    {
      id: 5,
      urlImg: "./src/assets/car-oil.png",
      title: "Manutenção Completa",
      description:
        "Fazemos a manutenção corretiva e preventiva garantindo segurança para você e sua família e bom funcionamento do seu veículo.",
    },
    {
      id: 6,
      urlImg: "./src/assets/car-oil.png",
      title: "Serviço no Motor",
      description:
        "Nossos especialistas preparados para lidar com a tecnologia automotiva de última geração em veículos de todas as marcas e mantê-los em um estado perfeito.",
    },
  ];

  return ourServices.map((service) => (
    <div
      key={service.id}
      className="p-8 text-center text-white rounded-lg cursor-pointer hover:border bg-zinc-700 hover:border-amber-400 "
    >
      <img className="w-16 mx-auto" src={service.urlImg} alt="car oil image" />
      {/* <FaCarBattery className="mx-auto text-3xl text-amber-500" /> */}
      {/* <GiCarWheel className="mx-auto text-3xl text-amber-400" /> */}
      <h4 className="my-8 text-lg uppercase text-amber-400">{service.title}</h4>
      <p className="text-justify text-amber-50">{service.description}</p>
    </div>
  ));
};
