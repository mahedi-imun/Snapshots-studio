import React from 'react';

const Blogs = () => {
    return (
        <div >
            <div className='container mt-5'>
                <h3>Difference between authorization and authentication?</h3>
                <p>authentication and authorization are used in the security of website . they might sound similar but are completely different . authentication is used to authenticate someones identity, wherease authorization is a way to provide permissione to someone to access a particolar resource.
                    <br />
                    authentication: authentication is the process of identifyi someone identity by assuring that the persone is the same as what he is claimin .
                    authorization: it define that what data and information one user can access.
                </p>
                <h3>Why are you using firebase?</h3>
                <p>
                    firebase  easy to start a project with firebase or add a firebase to my project. it allows real-time database connection, which means mulltiple users can see the change  the data when the data get created or edited.
                    painless authentication with Google.
                    easy to set up with react-cli
                    quick setup authentication via the major providers google, twitter, facebook, gitHub,microsoft. firebase supported platforms : android, iOS, Web,Unity. <br />
                    <span className='fs-5'>other options implement authentication: - </span><br />
                    1. Parse 2. Back4App 3. AWS Amplify 4. Kuzzle 5. Couchbase 6. NativeScript 7. RxDB 8. Flutter 9. LoopBack 10. SashiDo

                </p>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>
                    1. Realtime Database. 2. Remote config. 3. Firebase ML. 4.cloud function . 5.Hosting. 6.Cloud storage
                </p>
            </div>
        </div>
    );
};

export default Blogs;