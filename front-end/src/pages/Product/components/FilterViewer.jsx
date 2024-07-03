import { Menu } from 'antd';
import PropTypes from 'prop-types';

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
    return (
        <div>
            Filter
        </div>
    );
}

export default FilterViewer;
