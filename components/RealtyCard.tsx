import Image from "next/image";

const RealtyCard = () => {
    return (
        <div className="flex flex-col items-center justify-center w-40 h-max p-2 bg-white/20 backdrop-blur-sm rounded-xl">
            <div>
                <Image src='/test.jpeg' width={142} height={160} alt="?"></Image>
            </div>
            <div className="text-center font-mono text-2xl">
                Квартира на побегушках
            </div>
            <div className="text-blue-500 font-bold">
                1 000 200 Р.
            </div>
        </div>
    );
}

export default RealtyCard;