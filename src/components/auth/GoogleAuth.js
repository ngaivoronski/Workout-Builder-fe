import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchAllData } from '../actions';

const GoogleAuth = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search);

    if (urlParams) {
      localStorage.setItem("token", urlParams.get("token"));
      localStorage.setItem("first_name", urlParams.get("first_name"));
      localStorage.setItem("last_name", urlParams.get("last_name"));
    }

    fetchAllData(dispatch).then(() => {
      props.navigate("/dashboard");
    });

  }, [props, dispatch]);

  return null;
};

export default GoogleAuth;
