import linkedinImg from '../assets/linkedin.jpeg';

const LinkedIn = () => (
    <section className='bg-blue-300'>
  <section className="p-8 max-w-3xl mx-auto bg-blue-300">
    <h2 className="text-2xl font-bold mb-4">LinkedIn</h2>
    <a href="https://www.linkedin.com/in/rebecca-reji/" target="_blank" className="underline text-blue-600">
      Visit My LinkedIn
    </a>
    <img src={linkedinImg} alt="LinkedIn Profile" className="mt-4 rounded shadow" />
  </section>
    </section>
);
export default LinkedIn;