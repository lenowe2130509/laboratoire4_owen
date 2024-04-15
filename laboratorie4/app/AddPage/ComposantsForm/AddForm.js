"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddForm(){
    async function confirmerPublication(formData) {
        let titre = formData.get("titre");
        let auteur = formData.get("auteur");
        let contenu = formData.get("contenu");

        var nouvellePublication = {
            "titre": titre,
            "auteur": auteur,
            "date de publication": new Date(),
            "contenu": contenu
            };     
        const reponse = await fetch("http://localhost:3001/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouvellePublication),
            })             
    }

    async function modifierPublication(formData) {
        let idPublication = formData.get("id");
        let titre = formData.get("titre");
        let auteur = formData.get("auteur");
        let contenu = formData.get("contenu");
    
        var publicationModifiee = {
            "id": idPublication,
            "titre": titre,
            "auteur": auteur,
            "date de modification": new Date(),
            "contenu": contenu
        };
        const reponse = await fetch("http://localhost:3001/api/" + idPublication, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(publicationModifiee),
        });
    }

    async function supprimerPublication(idPublication) {
        const reponse = await fetch("http://localhost:3001/api/" + idPublication, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (reponse.ok) {
            console.log('Publication supprimée avec succès');
        } else {
            console.error('La suppression de la publication a échoué');
        }
    }
return(
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form id="AddPublication" action={confirmerPublication}>
                        <div className="form-group">
                            <label htmlFor="titre">Titre:</label>
                            <input type="text" className="form-control" id="titre" name="titre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="auteur">Auteur:</label>
                            <input type="text" className="form-control" id="auteur" name="auteur" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contenu">Contenu:</label>
                            <textarea className="form-control" id="contenu" name="contenu" rows="4" required></textarea>
                        </div>
                        <input type="hidden" id="id" name="id" value="1" required />
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form id="ModifierPublication" action={modifierPublication}>
                        <div className="form-group">
                            <label htmlFor="publication">Choisir la publication à modifier:</label>
                            <select className="form-control" id="publication" name="publication" required>
                                <option value="1">Publication 1</option>
                                <option value="2">Publication 2</option>
                                <option value="3">Publication 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="titre">Nouveau titre:</label>
                            <input type="text" className="form-control" id="titre" name="titre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="auteur">Nouvel auteur:</label>
                            <input type="text" className="form-control" id="auteur" name="auteur" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contenu">Nouveau contenu:</label>
                            <textarea className="form-control" id="contenu" name="contenu" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Modifier la publication</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form id="SupprimerPublication" action={supprimerPublication}>
                        <div className="form-group">
                            <label htmlFor="publication">Choisir la publication à supprimer:</label>
                            <select className="form-control" id="publication" name="publication" required>
                                <option value="1">Publication 1</option>
                                <option value="2">Publication 2</option>
                                <option value="3">Publication 3</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-danger">Supprimer la publication</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)

}