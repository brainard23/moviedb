import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
// image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from './SearchBar.styles'; 

//using classes
class SearchBar extends Component {
state = { value: '' }; 
timeout = null;


//lifecycle
 componentDidUpdate(_prevProps, prevState) {
     if(this.state.value !== prevState.value) {
         const { setSearchTerm } = this.props;

         clearTimeout(this.timeout)

         this.timeout = setTimeout(() => {
             const { value } = this.state;
            setSearchTerm(value); 
        }, 500);
     }
 }

 render() {

    const { value } = this.state;

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                type='text' placeholder='Search Movie' 
                onChange={event => this.setState( { value: event.currentTarget.value })}
                value={value}
                />
            </Content>
        </Wrapper>
    )
 }   
}

SearchBar.propTypes = {
    callBack: PropTypes.func
}


export default SearchBar; 