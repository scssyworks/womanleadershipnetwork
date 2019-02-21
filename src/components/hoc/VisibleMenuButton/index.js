import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideMenu, showMenu } from '../../../actions/menu';
import MenuButton from '../../atoms/MenuButton';

const VisibleMenuButton = connect(
    function ({ isMenuHidden }) {
        return { isMenuHidden };
    },
    function (dispatch) {
        return bindActionCreators({
            showMenu,
            hideMenu
        }, dispatch);
    }
)(MenuButton);

export default VisibleMenuButton;