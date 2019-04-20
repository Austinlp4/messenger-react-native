import { put } from 'redux-saga/effects';

export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

export default function* loginAsync() {
    
}