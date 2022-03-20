import React, {useState}     from 'react';
import PropTypes             from 'prop-types'
import {Button, ButtonGroup} from "reactstrap";

const FilterController = ({handleFilter}) => {
    const buttonList= [
        {
            title : 'All',
            value : 'all',
        },
        {
            title : 'Running',
            value : 'running',
        },
        {
            title : 'Completed',
            value : 'completed',
        },
    ];

    const [activeButton, setActiveButton] = useState('all');

    const handleClick = (button) => {
        setActiveButton(button.value);
        return handleFilter(button.value);
    }

    return (
        <ButtonGroup>
            {buttonList && buttonList.map(btn =>
                <Button key={btn.value} color={btn.value === activeButton ? 'warning' : ''}
                        onClick={() => handleClick(btn)}>{btn.title}</Button>)
            }
        </ButtonGroup>
    );
};

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired
}

export default FilterController;
