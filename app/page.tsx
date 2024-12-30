import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Navbar />
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <Image
      className=" rounded-lg"
      src="/poto_sigma.jpg"
      alt="Next.js logo"
      width={300}
      height={200}
      priority
      />
    <div>
      <h1 className="text-5xl font-bold">Hello!</h1>
      <h1 className="text-5xl font-bold"> My Name is Kafka!</h1>
      <p className="py-6">
        BackEnd Developer.
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <Image
      src="/poto_sigma.jpg"
      alt="poto kafka logo"
      width={300} 
      height={400}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold">Discover</h1>
      <h2 className="text-5xl font-semibold underline decoration-sky-500">About Me!</h2>
      <p className="py-6">
        hay, i`m kafka arko , and i`m so excited to become BackEnd Developer , now i`, school at  <span className="underline decoration-yellow-500">SMK Wikrama Bogor</span> and my major is Software and Game Development,.
      </p>
      <div className="border border-sky-600">
        <div className=" justify-center items-center grid grid-cols-2 gap-4">
        <h1>Full Name: Kafka Arko Ardissya</h1>
        <h1>School: SMK Wikrama Bogor</h1>
        <h1>Age: 16</h1>
        <h1>Addreas: Balandogon Daigo</h1>
        <h1>Phone Number: +62 856-9450-2613</h1>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold mt-4">Follow Me!!</h1>
      <div className="flex justify-start items-center grid-cols-1 mt-3 gap-2">
        <a href="https://www.linkedin.com/in/kafkaarrr/">
      <div className="avatar">
    <div className="w-10 rounded-full">
      <Image
      src="/linkedin.png"
      alt="linkedin"
        width={10}
        height={10}
      />
    </div>
  </div>
        </a>
  <a href="https://www.instagram.com/kafka.svg/">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <Image
          src="/instagram.png"
          alt="instagram"
            width={10}
            height={10}
          />
        </div>
    </div>
  </a>
      </div>
      </div>
    </div>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="flex justify-start items-start"> 
    <h1 className="text-2xl font-semibold italic ">My Skills</h1>
    <div className=" justify-center grid grid-cols-3 auto-cols-max gap-16 mt-16  ">
    <Card
    img="/laravel.png"
    alt="laravel"
    nf="Laravel"
    description="Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling."
    
    />
    <Card
    img="/React.png"
    alt="React"
    nf="React"
    description='React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.'

    />
    <Card
    img="/py.jpeg"
    alt="python"
    nf="python"
    description="python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages."

    />
    <Card
    img="/php.png"
    alt="php"
    nf="php"
    description="php is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."

    />
    <Card
    img="/js.png"
    alt="javascript"
    nf="javascript"
    description="javascript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."

    />
    </div>
  </div>
</div>
<Footer/>
    </>
  );
}
