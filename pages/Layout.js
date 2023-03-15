import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav className="text-center ">
           <h2 className=" text-cyan-300 text-6xl p-1.5 text-center font-effect-fire">
           <Link  to="/">Home</Link>
        </h2>
        
        <h3 className="text-red-500 text-3xl bg-amber-200 inline-block rounded-md">Video's Coming Soon</h3>
          <br />
        <h3 className="text-orange-300 text-3xl bg-gray-400 inline-block rounded-md">I Build Web Sites for Cheap Price's</h3>

          <ul className="grid grid-cols-4 p-9 layout text-center text-indigo-50 text-4xl leading-relaxed ">
          <li>
            <Link to="/Alien">Alien</Link>
          </li>
          <li>
            <Link to="/Boraicho">BoRaiCho</Link>
          </li>
          <li>
            <Link to="/Cassiecage">CassieCage</Link>
          </li>  
         
          <li>
            <Link to="/Dvorah">Dvorah</Link>
          </li>
          <li>
            <Link to="/Ermac">Ermac</Link>
          </li>
          <li>
            <Link to="/Erronblack">ErronBlack</Link>
          </li>    

              <li>
            <Link to="/Ferratorr">FerraTorr</Link>
          </li>
          <li>
            <Link to="/Goro">Goro</Link>
          </li>
          <li>
            <Link to="/Jacquibriggs">JacquiBriggs</Link>
          </li>  
         
          <li>
            <Link to="/Jason">Jason</Link>
          </li>
          <li>
            <Link to="/Jax">Jax</Link>
          </li>
          <li>
            <Link to="/Johnnycage">JohnnyCage</Link>
              </li>    
              
              <li>
            <Link to="/Kano">Kano</Link>
          </li>
          <li>
            <Link to="/Kenshi">Kenshi</Link>
          </li>
          <li>
            <Link to="/Kitana">Kitana</Link>
          </li>  
         
          <li>
            <Link to="/Kotalkahn">KotalKahn</Link>
          </li>
          <li>
            <Link to="/Kungjin">KungJin</Link>
          </li>
          <li>
            <Link to="/Kunglao">KungLao</Link>
              </li>    
              
              <li>
            <Link to="/Leatherface">Leatherface</Link>
          </li>  
         
          <li>
            <Link to="/Liukang">LiuKang</Link>
          </li>
          <li>
            <Link to="/Mileena">Mileena</Link>
          </li>
          <li>
            <Link to="/Predator">Predator</Link>
          </li>    

              <li>
            <Link to="/Quanchi">QuanChi</Link>
          </li>
          <li>
            <Link to="/Raiden">Raiden</Link>
          </li>
          <li>
            <Link to="/Reptile">Reptile</Link>
          </li>  
         
          <li>
            <Link to="/Scorpion">Scorpion</Link>
          </li>
          <li>
            <Link to="/Shinnok">Shinnok</Link>
          </li>
          <li>
            <Link to="/Sonyablade">SonyaBlade</Link>
              </li>    
              
              <li>
            <Link to="/Subzero">SubZero</Link>
          </li>
          <li>
            <Link to="/Takeda">Takeda</Link>
          </li>
          <li>
            <Link to="/Tonya">Tonya</Link>
          </li>  
         
          <li>
            <Link to="/Tremor">Tremor</Link>
          </li>
          <li>
            <Link to="/Triborg">Triborg</Link>
          </li>
         
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;


