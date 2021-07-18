import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }
    render() {
        return (
            <div>
                {this.props.isLoading ? 
                    <h1>Loading...</h1>
                :
                    this.props.errText ? 
                        <div>
                            <h1>
                                {this.props.errText}
                            </h1>
                        </div>
                    :
                        <div>
                            <h2>list</h2>
                            <ul>
                                {this.props.items.map((item) => (
                                    <li key={item.id}>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                            <h2>sorted list</h2>
                            <ul>
                                {this.props.sortItems.map((item) => (
                                    item.children ? 
                                    <li key={item.id}>
                                        {item.label}
                                        <ul>
                                            {item.children.map(childrenItem => (
                                                childrenItem.children ? 
                                                <li key={childrenItem.id}>
                                                    {childrenItem.label}
                                                    <ul>
                                                        {childrenItem.children.map(twoChildrenItem => (
                                                            <li key={twoChildrenItem.id}>
                                                                {twoChildrenItem.label}
                                                            </li> 
                                                        ))}
                                                    </ul>
                                                </li> 
                                                :
                                                <li key={childrenItem.id}>
                                                    {childrenItem.label}
                                                </li> 
                                            ))}
                                        </ul>
                                    </li>
                                    :
                                    <li key={item.id}>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                }
            </div>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    sortItems: PropTypes.array.isRequired,
    errText: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items.arr,
        sortItems: state.items.sortArr,
        errText: state.items.fetchDataErrorText,
        isLoading: state.items.fetchDataLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
