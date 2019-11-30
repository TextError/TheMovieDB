import styled from 'styled-components';
import { Primary, Secondary, Black, Grey } from '../../../layout/layout.scss';

const StyledPagination = styled.section`
  .pagination {
    display: flex;
    justify-content: center;
    margin: 15px 0;
    ul {
      display: flex;
      .previous, .next {
        a {
          font-weight: 500;
          color: ${Black} !important;
        }
      }
      li {
        margin: 0 8px;
        padding: 0 8px;
      }
      .active {
        border-bottom: 1px solid ${Black};
        a {
          color: ${Secondary};
        }
      }
      .disabled {
        a {
          color: ${Grey} !important;
        }
      }
      a {
        color: ${Primary};
        outline: none;
      }
    }
  }
`

export default StyledPagination;