import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Heart, Compass, Mountain, Users, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bannerImage from "@/assets/detail-lake-2.jpg";

const values = [
  {
    icon: MapPin,
    title: "Lugares Reais",
    description: "Cada ponto turístico é verificado e apresentado com informações precisas sobre localização, acesso e infraestrutura."
  },
  {
    icon: Heart,
    title: "Paixão Local",
    description: "Valorizamos a cultura paraibana e destacamos experiências que conectam visitantes às tradições do estado."
  },
  {
    icon: Compass,
    title: "Descoberta",
    description: "Incentivamos a exploração consciente de praias, trilhas, formações naturais e patrimônios históricos."
  },
  {
    icon: Mountain,
    title: "Natureza",
    description: "Promovemos o turismo de natureza com respeito ao meio ambiente e às comunidades locais."
  },
  {
    icon: Users,
    title: "Acessibilidade",
    description: "Organizamos informações por distância, nível de trilha e necessidade de guia para todos os perfis de viajantes."
  },
  {
    icon: Camera,
    title: "Inspiração",
    description: "Mostramos a Paraíba através de imagens e descrições que inspiram novas viagens e aventuras."
  }
];

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Image with Parallax */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Paisagem paraibana"
          style={{ y }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main>
        {/* Our Story Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Sobre Nós</span>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">Nossa História</h1>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  O Descubra Paraíba nasceu da vontade de reunir em um só lugar os destinos mais incríveis do estado. 
                  Da costa litorânea ao sertão, das serras ao brejo, a Paraíba guarda paisagens e histórias que 
                  merecem ser conhecidas por quem mora aqui e por quem visita.
                </p>
                <p>
                  Criamos esta plataforma para facilitar a descoberta de praias, trilhas, formações naturais, 
                  patrimônios históricos e experiências culturais. Nosso objetivo é ajudar viajantes a planejar 
                  roteiros com informações claras, filtros úteis e localização no mapa.
                </p>
                <p>
                  Cada ponto turístico cadastrado passa por uma curadoria que considera acessibilidade, 
                  infraestrutura, nível de esforço e a importância cultural ou natural do lugar. Queremos que 
                  a descoberta da Paraíba seja simples, inspiradora e segura.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Paraíba Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">O Porquê</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">Por Que Conhecer a Paraíba?</h2>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  A Paraíba é um dos estados mais diversos do Nordeste brasileiro. Em poucos quilômetros, é possível 
                  ir de praias de águas mornas a serras de clima ameno, de cânions do sertão a engenhos históricos 
                  do agreste.
                </p>
                <p>
                  Muitos desses lugares ainda são pouco explorados pelo turismo de massa, o que preserva sua 
                  autenticidade. Ao mesmo tempo, falta uma centralização de informações práticas para quem quer 
                  visitá-los com segurança e respeito.
                </p>
                <p>
                  No Descubra Paraíba, acreditamos que conhecer o estado é valorizar suas comunidades, 
                  proteger sua natureza e celebrar sua cultura. E que cada viagem bem planejada começa com 
                  informação de qualidade.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Nossos Princípios</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2">O Que Nos Guia</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-border rounded-lg bg-card shadow-soft hover:shadow-md transition-shadow duration-300"
                >
                  <value.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-light tracking-tight mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
