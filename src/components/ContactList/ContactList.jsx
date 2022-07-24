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