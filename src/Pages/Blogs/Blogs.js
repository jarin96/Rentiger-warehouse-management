import React from 'react';

const Blogs = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div>
                        <h3>Difference between authorization and authentication?</h3>
                        <p>Authentication is about validating your credentials like username and password to verify your identity.If username and password are same then it will called authenticated user.Authorization is the process to determine whether the authenticated user has access to the particular resources.It checks your rights to grant you access to resources such as information, database, files, etc.If a user have to go to a application the user have to be authenticated.Then the user would be authorized for which resources he can use.</p>

                        <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p>Firebase is Google's Backend as a service.Firebase offer an extents verity of backend solutions, and integration for web developers.Firebase is free to start.Second reason for using firebase because it is an incredibly simple backend solution for a small team to get an app running.Firebase is exhaustive it takes care of every backend solution that you can think of, one of those is authentication.Firebase has intelligent structure of cloud firestore database.Firebase database used to store users informations and other things.Firebase cloud storage used to store user-generated content like profile picture, messages etc.
                            To implement authentication we have parse, Back4APP, Aws Amplify , Kuzzle, couchbase, NativeScript, RXDB , Flutter.
                        </p>

                        <h3>What other services does firebase provide other than authentication?</h3>
                        <p>Firebase is a full package that can build in developing your web applications efficiently.Services that firebase provide other than authentication are cloud firebase, cloud functions, Hosting, cloud storage, Google Analytics, Predictions, cloud messaging, Remote config.Firebase is a great tool to implement notifications because it is very fast and you can use firebase free of charge.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;