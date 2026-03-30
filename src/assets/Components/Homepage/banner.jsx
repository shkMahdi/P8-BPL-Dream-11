import BannerBG from '../../bg-shadow.png'
import BannerLogo from '../../banner-main.png'

const banner = () => {
    return (
        <div
            className="max-w-330 w-full mx-auto h-75 md:h-136.25 bg-black bg-cover bg-center rounded-2xl overflow-hidden flex flex-col justify-center items-center text-center gap-4"
            style={{
                backgroundImage: `url(${BannerBG})`
            }}
        >
            <img src={BannerLogo} alt="" />
            <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl text-white/70 font-medium'>Beyond Boundaries Beyond Limits</p>
            <div className='w-fit rounded-xl border-2 border-yellow-300'>
                <button className='bg-yellow-300 text-black font-bold border-8 border-black rounded-xl py-3 px-5'>
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default banner;