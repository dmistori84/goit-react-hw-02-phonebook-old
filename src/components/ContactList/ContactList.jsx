import PropTypes from 'prop-types';
//import { array } from 'yup';
import styles from './ContactList.module.css';

export const ContactList = ({ data, onDeleteContact }) => {    
    return (
        <div>
          <ul className={styles.ContactList}>
            {data.map(({id, tel, name}) => { 
              return (
                <li key={id}>
                    {name}: {tel}
                    <button
                        type="button" 
                        onClick={()=>onDeleteContact(id)}    
                    >Delete
                    </button>
                </li>
              )
            })}
          </ul>
        </div>     
    )
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    tel: PropTypes.string,
    name: PropTypes.string
  })),
  onDeleteContact: PropTypes.func,
}