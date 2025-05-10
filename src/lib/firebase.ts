
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword as firebaseSignIn, 
  createUserWithEmailAndPassword as firebaseCreateUser, 
  signOut as firebaseSignOut,
  UserCredential,
  onAuthStateChanged
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LD0Obq50v9CE4-sIQyWEF9DN_XWYX5Q",
  authDomain: "food-skill-rack-login.firebaseapp.com",
  projectId: "food-skill-rack-login",
  storageBucket: "food-skill-rack-login.firebasestorage.app",
  messagingSenderId: "525725197758",
  appId: "1:525725197758:web:aab63f7bb8eca8f73585ef",
  measurementId: "G-YP6JGSJL8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Enhanced sign in wrapper
const signInWithEmailAndPassword = async (
  auth: any,
  email: string, 
  password: string
): Promise<UserCredential> => {
  console.log("Attempting to sign in user:", email);
  try {
    const result = await firebaseSignIn(auth, email, password);
    console.log("Login successful for user:", result.user.uid);
    return result;
  } catch (error: any) {
    console.error("Firebase login error:", error.code, error.message);
    throw error;
  }
};

// Enhanced create user wrapper
const createUserWithEmailAndPassword = async (
  auth: any, 
  email: string, 
  password: string
): Promise<UserCredential> => {
  console.log("Attempting to create user with email:", email);
  try {
    const result = await firebaseCreateUser(auth, email, password);
    console.log("User creation successful:", result.user.uid);
    return result;
  } catch (error: any) {
    console.error("Firebase createUser error:", error.code, error.message);
    throw error;
  }
};

// Enhanced sign out wrapper
const signOut = async (): Promise<void> => {
  console.log("Attempting to sign out user");
  try {
    await firebaseSignOut(auth);
    console.log("Sign out successful");
  } catch (error: any) {
    console.error("Firebase sign out error:", error.code, error.message);
    throw error;
  }
};

// Get current auth state
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

export { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  getCurrentUser
};
