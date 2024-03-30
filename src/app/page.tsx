import Image from "next/image";
export default function Home() {
  return (
    <>
      <header>
        <nav className="container flex flex-row justify-evenly flex-nowrap space-x-4 h-9 text-white mx-auto my-8 text-2xl -inset-x-0 top-0 absolute z-20">
          <a href="#main" className="hover:text-primary shadow-sm">Sobre mim</a>
          <a href="#projects" className="hover:text-primary shadow-sm">Projetos</a>
          <a href="#contact" className="hover:text-primary shaddow-sm">Contatos</a>
        </nav>
      </header>
      <main className="sm:snap-y sm:snap-mandatory w-full sm:h-screen sm:w-screen sm:overflow-scroll">
        <section id="main" className="snap-start flex flex-row sm:w-screen sm:h-screen">
          <div className="flex w-full h-full my-28">
            <div className="flex flex-col w-full sm:w-2/3 sm:ml-8 sm:mr-6 sm:pl-10 text-white translate-y-10 items-center">
              <p className="text-4xl">Olá !</p>
              <h1 className="text-5xl sm:mb-4 text-center sm:text-4xl">Sou <span className="text-primary">Gabriel Soares</span></h1>
              <Image
                src="/profile.jpg"
                width={300}
                height={320}
                className="scale-75 object-cover rounded-full flex sm:hidden"
                alt="Minha foto linda e maravilhosa!"
              />
              <p className="text-2xl">Desenvolvedor de Software</p>
              <p className=" text-2xl">Especialista em Redes</p>
              <p className=" text-2xl">Arquiteto de Soluções em Cloud</p>
              <p className="text-base sm:text-xl md:text-3xl mt-4 w-max-[540px] text-center mx-8 ">Desenvolvedor de soluções, especializado em desenvolvimento web utilizando React e NodeJS, com certificação Fortinet Network Security Professional e experiência como Cloud Solution Architect.</p>
            </div>
            <div className="hidden sm:flex sm:w-1/3 mr-4 flex-col translate-y-10 items-center">
              <Image
                src="/profile.jpg"
                width={334}
                height={385}
                className="object-contain h-80 w-full rounded-full "
                alt="Minha foto linda e maravilhosa!"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="snap-start sm:w-screen sm:h-screen">
          <div className="flex flex-col justify-center items-center text-white">
            <h3 className="text-4xl sm:mt-28">Projetos que trabalhei</h3>

            <div className="flex flex-col sm:flex-row sm:justify-normal sm:items-baseline sm:snap-x sm:snap-mandatory sm:overflow-x-scroll sm:z-10 md:grid md:grid-cols-2 md:gap-4 md:mt-28">

              <div className="flex flex-col my-8 text-center justify-center items-center sm:snap-center sm:flex-shrink-0">
                <a href="https://wparty.com.br" target="_blank">
                  <Image src={"/wparty.png"} alt={"Página Home WParty"} width={300} height={300} className="rounded-lg object-cover w-80 h-44 sm:w-full" />
                </a>
                <span className="text-xl font-bold">WParty</span>
                <p className="mx-8 sm:w-99">Desenvolvi o sistema para conexão entre clientes e fornecedores de eventos.</p>
              </div>

              <div className="flex flex-col my-8 text-center justify-center items-center sm:snap-center sm:flex-shrink-0">
                <a href="https://github.com/gabrielmenezes/WebControlURL" target="_blank">
                  <Image src={"/webcontrolurl.jpg"} alt={"Página Web Control URL"} width={300} height={300} className="rounded-lg object-cover w-80 h-44" />
                </a>
                <span className="text-xl font-bold">Web Control URL</span>
                <p className="mx-8 sm:w-96">Desenvolvi o sistema para bloqueio de URL maliciosas e solicitadas por meio de oficio, para DNS Bind e Firewalls fortinet.</p>
              </div>


              <div className="flex flex-col my-8 text-center justify-center items-center sm:snap-center sm:flex-shrink-0">
                <a href="https://shapp.app.br/" target="_blank">
                  <Image src={"/shapp_aws.png"} alt={"Sistema para Shoppings"} width={300} height={300} className="rounded-lg object-cover w-80 h-44" />
                </a>
                <span className="text-xl font-bold">App Shapp</span>
                <p className="mx-8 sm:w-96">Fiz o deploy do sistema na AWS (Route 53, S3, CloudFront, RDS MySQL, EC2, LB, ECR), configurando CI/CD para Backend e Frontend.</p>
              </div>

              <div className="flex flex-col my-8 text-center justify-center items-center sm:snap-center sm:flex-shrink-0">
                <a href="https://www.obahortifruti.com.br/" target="_blank">
                  <Image src={"/logo-oba.jpg"} alt={"Oba Hortifruti"} width={300} height={300} className="rounded-lg object-cover w-80 h-44" />
                </a>
                <span className="text-xl font-bold">Oba Hortifruti</span>
                <p className="mx-8 sm:w-96">Atuando como Engenheiro de Redes, fiz a implementação das comunicações das lojas Oba, com matriz e CDs. Incluindo conectividade através da Oracle OCI.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="snap-start sm:w-screen sm:h-screen">
          <div className="flex flex-col justify-center sm:translate-y-10 my-10 text-white text-start w-96 mx-auto sm:w-full sm:h-full items-center">
            <h3 className="text-4xl my-4">Contatos</h3>
            <div className="text-start">
              <div className="flex flex-row space-x-2 my-2">
                <Image src={'/mail.svg'} alt=" Email Logo" width={24} height={24} className=" " />
                <p>Email: <a href="mailto:gabrielvm.soares@outlook.com" className="hover:text-primary">gabrielvm.soares@outlook.com</a></p>
              </div>
              <div className="flex flex-row space-x-2 my-2">
                <Image src={'/whatsapp.svg'} alt="Whatsapp Logo" width={24} height={24} className=" " />
                <p>Whatsapp: <a href="https://api.whatsapp.com/send?phone=5511952508537" target="_blank" className="hover:text-primary">Converse comigo</a></p>
              </div>
              <div className="flex flex-row space-x-2 my-2">
                <Image src={'/linkedin.svg'} alt="Linkedin Logo" width={24} height={24} className=" " />
                <p className="self-center">Linkedin: <a href="https://www.linkedin.com/in/gabrielmsoares/" target="_blank" className="hover:text-primary">Meu Perfil</a></p>
              </div>
              <div className="flex flex-row space-x-2 my-2">
                <Image src={'/github.svg'} alt="Github Logo" width={24} height={24} className=" " />
                <p>Github: <a href="https://github.com/gabrielmenezes" target="_blank" className="hover:text-primary">Meu Perfil</a></p>
              </div>
            </div>
          </div>
        </section>
      </main >
      <footer></footer>
    </>
  );
}
