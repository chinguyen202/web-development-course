import { browser } from "$app/environment";

const KEY = "communities";
let initialCommunities = [];

if (browser && localStorage.getItem(KEY) != null) {
    initialCommunities = JSON.parse(localStorage.getItem(KEY));
}

let communityState = $state(initialCommunities);

const saveCommunities = () => {
    localStorage.setItem(KEY, JSON.stringify(communityState));
};

const useCommunityState = () => {
    return {
        get communities() {
            return communityState;
        },
        getOne: (id) => {
            return communityState.find((c) => c.id === id);
        },
        addCommunity: (name, description) => {
            communityState.push({ id: communityState.length + 1, name, description });
            saveCommunities();
        },
        removeCommunity: (id) => {
            communityState = communityState.filter((c) => c.id !== id)
            saveCommunities();
        }
    };
};

export { useCommunityState };