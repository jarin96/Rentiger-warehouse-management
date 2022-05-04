import React from 'react';

const Blogs = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div>
                        <h3> Difference between javascript and nodejs?</h3>
                        <p>Node Js is a Technology to build the back-end of applications with Javascript.
                            Google Chrome's V8 javascript engine powers Node.js.
                            Developers use this framework for hosting apis, serving HTTP requests, and accessing the database. Node.Js Features are open source, server development,
                            Enhanced performance, unit testing, scalability.
                            Javascript is a programming language, it usually used in the browser, javascript engine.Whereas Node.js is an interpreter or running environment for a javascript
                            programming language that holds many excesses, it require libraries that can easily be accessed from javascript programming for better use.Javascript is used basically for client side activity for one web application.Whereas nodejs mainly used for accessing or running any operating system for non-blocking operation.
                        </p>

                        <h3> When should you use nodejs and when should you use mongodb?</h3>
                        <p>Node.Js is a javascript engine that you can write any application you want (by programming in the javascript language).It runs your javascript code.Mongodb is a database engine.Code within some application or server uses Mongodb to save,query or update data in a database.There are many web servers built with nodejs that will then use mongodb for storing data.If you want to write some kind of stand-alone program or server in javascript, then you can use nodejs for it.
                            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you should use some form of database.
                        </p>

                        <h3>Differences between sql and nosql databases?</h3>
                        <p>Sql is generally used in Relational database management system.Sql database require a schema to be developed in advance and all the data is stored according to that schema.In Sql data is stored in form of tables in the database.Sql uses standardized sql syntax command or query language to query the data.Nosql is non relational database management system.Nosql database have dynamic schema.In NoSql database have dynamic schema.In NoSql data stores form of object,document,graph etc.NoSql don't have any standardized query format to retrieve the data.NoSql databases are used when data to be stored is less and budget is low.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;