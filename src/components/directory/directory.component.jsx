import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirecotrySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menuItem/meu-item.component";
import "./directory.styles.css";

const Directory = ({ directorySections }) => {
  return (
    <div className="directory-container">
      {directorySections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);

// https://i.ibb.co/54kWnYg/desktop-image-hero-3.jpg
// https://i.ibb.co/HBc3csj/desktop-image-hero-1.jpg
// https://i.ibb.co/Jyb26CG/desktop-image-hero-2.jpg
// https://i.ibb.co/KDrypSM/image-about-light.jpg
// https://i.ibb.co/6yq2Cfn/image-about-dark.jpg
