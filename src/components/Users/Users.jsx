import React from 'react'
import s_users from "./UsersItem/Users.module.css"

let User = (props) => {


    let pagesCount = 5; //В теории вычисление происходит от кол-во всех пользователей по отношению отображения пользователей на странице.

    let countUser = (Count) => {
        let mas = [];
        for(let i = 1; i <= Count; i++) {
            mas.push(i) //кол-во страничек
         }
        return mas;
    }

    return (
        <div className={s_users.s_users}>
            <div>
                {
                    countUser(pagesCount).map( p => {

                        return <span className={props.pageNum + 1 === p && s_users.selected} onClick={ e => {

                                props.onPageChanged(e);
                            }
                        }>
                        {p}
                        </span>
                    })
                }
            </div>
            {
                props.users.map (u => <div key ={u.id}>
                        <div>
                            <div className={s_users.image}>
                                <img
                                    src='https://w7.pngwing.com/pngs/216/729/png-transparent-avatar-simple-anonymous-icon.png'
                                    alt='Ya Sosal' onClick={() => {
                                    props.onClickImage(u.id);
                                }}/>
                            </div>
                            <div>
                                <button>Follow</button>
                            </div>
                        </div>
                        <div>
                            <p>{u.Name}:{" "}
                                {u.Status}
                            </p>

                        </div>
                </div>)
            }
        </div>
    )
}

export default  User;