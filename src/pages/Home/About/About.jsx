import about from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content flex-col gap-5 lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img  src={about} className=" rounded-lg w-3/4 shadow-2xl" />
                    <img src={parts} className="max-w-sm absolute w-1/2 right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable</p>
                    <button className="btn btn-active mt-5 btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;