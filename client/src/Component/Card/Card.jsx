// import redmi7A from "../img/redmi7A.png";
import cart from "../img/cart.png";

const Card = (props) => {
  return (
    <div className="card w-72 m-8 shadow-lg py-2 hover:cursor-pointer hover:shadow-2xl">
      <img className="h-32 m-auto" src={props.gambar} alt="" />
      <h2 className="ml-2 font-semibold text-lg mt-2 text-blue-400">
        {props.namaProduk}
      </h2>
      <p className="ml-2 text-base font-semibold">{props.motto}</p>
      <p className="ml-2 text-xs">{props.desc}</p>
      <div className="rating ml-2 w-full flex items-center">
        <p className="text-yellow-400 text-3xl">&#9733;</p>
        <p className="text-yellow-400 text-3xl">&#9733;</p>
        <p className="text-yellow-400 text-3xl">&#9733;</p>
        <p className="text-yellow-400 text-3xl">&#9733;</p>
        <p className="text-yellow-400 text-3xl">&#9733;</p>
      </div>

      {/* Menambahkan props agar cardnya lebih dinamis */}
      <p className="ml-2">{props.harga}</p>
      <div className="w-full flex mt-2">
        <button className="hover:shadow-lg bg-green-400 text-base font-semibold text-white py-1 px-4 rounded-lg block ml-auto mr-2">
          Beli
        </button>
        <button className="hover:shadow-lg bg-blue-400 text-base font-semibold text-white py-1 px-4 rounded-lg flex items-center mr-2">
          <img className="w-5 mr-1" src={cart} alt="" />
          Keranjang
        </button>
      </div>
    </div>
  );
};
export default Card;
