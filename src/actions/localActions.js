// services
import { request } from "../services/graphql";

// constants
import { countVocabulary } from "../constants/queries";

export function getVocabularySize() {
    return new Promise((resolve, reject) =>
        request(countVocabulary())
            .then(data => resolve(data.count))
            .catch(err => reject(err)))
};

