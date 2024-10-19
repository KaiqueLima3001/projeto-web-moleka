import LogoHeader from "/src/assets/logo-header-moleka.png";
import '/src/styles/HeaderFooter.css';

function HeaderFooter() {
  return (
    <div className="responsive-bar">
    <img className="responsive-image" src={LogoHeader} alt="logo-header-moleka" />
  </div>
  );
}
export default HeaderFooter;