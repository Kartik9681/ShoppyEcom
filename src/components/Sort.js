import React from 'react'
import styled from 'styled-components';
import {useFilterContext} from '../context/FilterContext'
const Sort = () => {
  const {filterProduct, sorting} = useFilterContext();
  const {filters:{text}, updateFilter} = useFilterContext();
  return (
    <Wrapper className='sort-section'>
      <div className='product-data'>
        <p>{`${filterProduct.length} Products Available`}</p>
      </div>

      {/* search box filtersss here................. */}
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='search' name='text' value={text} onChange={updateFilter}/>
        </form>
      </div>
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='sort' >
          <select name='sort' id = "sort" className='sort-selection--style' onClick={sorting}>
            <option value='lowest'>Price(lowest)</option>
            <option value='highest'>Price(highest)</option>
            <option value='a-z'>Price(a-z)</option>
            <option value='z-a'>Price(z-a)</option>
          </select>
          </label>
        </form>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .main-filter{
    display:flex;
    font-size: 3rem;
    justify-content: space-between;
    align-items: center;
  }
  .filter-search {
    input {
      padding: 0.6rem 3rem;
      width: 100%;
    }
  }
  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort
