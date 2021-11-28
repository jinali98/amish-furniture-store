import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirecotrySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menuItem/meu-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ directorySections }) => {
  return (
    <DirectoryContainer>
      {directorySections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirecotrySections,
});

export default connect(mapStateToProps)(Directory);
