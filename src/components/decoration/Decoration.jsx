const Decoration = () => {
    return (
        <div id="decoration" className="decoration absolute top-0 left-[80px] flex flex-col items-center">
            <div className="line h-[200px] w-[2px] bg-[#ABB2BF]"></div>
            <div className="application flex flex-col gap-[2px]">
                <a  href="https://github.com/minhbac01job" target='_blank'  rel="noreferrer">
                    <img src={require('../../resources/imgs/Github.png')} alt='' width={28} height={28} />
                </a>
                <a target='_blank' href="https://www.facebook.com/minhbac.le.9/" rel="noreferrer">
                    <img src={require('../../resources/imgs/Facebook.png')} alt='' width={32} height={32} />
                </a>
            </div>
        </div>
    );
}
export default Decoration;