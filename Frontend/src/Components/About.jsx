import image from "../assets/RebeccaReji.jpg"

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
        <img src={image} alt="Rebecca Reji" className="rounded-full w-32 mb-4" />
        <h1 className="text-3xl font-bold">Hi, I'm Rebecca Reji</h1>
        <p className="mt-4 text-lg">
            <strong>I am a graduate student pursuing a Master’s in Biotechnology at Northeastern University. I have a strong foundation in cell culture techniques. My laboratory experience includes techniques such as western blotting, gel electrophoresis, bacterial and algal culture methods, DNA extraction and microscopy.</strong>
        </p>
        <p className="mt-4 text-lg">
            <strong> My academic and professional interests lie in genetic engineering, recombinant DNA technology, immunology, and microbiology. I am particularly passionate about understanding diseases' molecular mechanisms and developing innovative therapeutic solutions.</strong>
        </p>
        <p className="mt-4 text-lg">
            <strong>I am actively seeking summer internship opportunities in biotechnology and pharmaceutical companies where I can apply my skills, gain hands-on experience, and collaborate on cutting-edge projects. I am eager to explore new technologies, learn from industry professionals, and contribute meaningfully to advancing biotechnological and pharmaceutical research.</strong> 
        </p>
        <p className="mt-4 text-lg">
            <strong>My goal is to contribute to groundbreaking biotechnological solutions that improve human health while continuously advancing my skills and expertise in research and innovation.</strong>
        </p>
    </div>
  );
};

export default About;
