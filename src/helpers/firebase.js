export const isAdmin = async ({ firebaseApp, uid }) => {
    const admins = await firebaseApp.database().ref('/admins').once('value');
    const val = admins.val();
    return val.includes(uid);
};
