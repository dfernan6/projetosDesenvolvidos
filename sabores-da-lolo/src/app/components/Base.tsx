import Image from "next/image"

export default function Base() {
    return (
      <section className="w-full flex flex-col items-center justify-center min-h-screen text-center p-6 bg-[#fff0f7]">
        <h1 className="text-4xl font-extrabold text-[#381819] mb-6">
          Um pedacinho de afeto em cada receita artesanal 💖
        </h1>
        <Image
          src="/assets/profilePictures/lolo3d.png"
          alt="Logo da Lolô"
          width={315}
          height={315}
          className="shadow-[0px_4px_12px_rgba(2,2,2,0.712)] rounded-full"
        />
        <p className="mt-6 text-lg text-[#4B3A2F] leading-relaxed max-w-2xl mx-auto">
          Seja muito bem-vindo à <b>Sabores da Lolô</b> — Onde cada pão, bolo e doce é feito com mãos carinhosas e ingredientes escolhidos a dedo. Aqui, tradição e afeto se misturam para criar experiências que aquecem o coração. Sinta-se em casa, descubra nossos sabores e deixe que a Lolô transforme seu dia com um toque doce e artesanal.
        </p>
      </section>            
    )
};