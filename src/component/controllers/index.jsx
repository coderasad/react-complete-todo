import React            from 'react';
import PropTypes        from 'prop-types'
import SearchPanel      from "./search-panel";
import {Col, Row}       from "reactstrap";
import FilterController from "./FilterController";
import ViewController   from "./ViewController";
import BulkController   from "./BulkController";

const Controller = ({
                        term,
                        toggleForm,
                        handleSearch,
                        handleFilter,
                        view,
                        changeView,
                        clearCompleted,
                        clearSelected,
                        reset
                    }) => {
    return (
        <div>
            <SearchPanel term={term} toggleForm={toggleForm} handleSearch={handleSearch}/>

            <Row className={`my-4`}>
                <Col md={{size: 4}}>
                    <FilterController handleFilter={handleFilter}/>
                </Col>
                <Col md={{size: 4}}>
                    <ViewController view={view} changeView={changeView}/>
                </Col>
                <Col md={{size: 4}} className={`d-flex`}>
                    <div className="ms-auto">
                        <BulkController
                            clearCompleted={clearCompleted}
                            clearSelected={clearSelected}
                            reset={reset}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Controller.propTypes = {
    term          : PropTypes.string.isRequired,
    view          : PropTypes.string.isRequired,
    handleSearch  : PropTypes.func.isRequired,
    toggleForm    : PropTypes.func.isRequired,
    changeView    : PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    clearSelected : PropTypes.func.isRequired,
    reset         : PropTypes.func.isRequired,
}

export default Controller;
