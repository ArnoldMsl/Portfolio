import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFailModalOpen, setIsFailModalOpen] = useState(false)
  const [isRGPDModalOpen, setIsRGPDModalOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('https://api.arnoldmasselin.fr/', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      setIsModalOpen(true)
      console.log('Email sent:', response.data)
    } catch (error) {
      setIsFailModalOpen(true)
      console.error('Error sending email:', error)
    }
  }

  const openRGPDModal = () => {
    setIsRGPDModalOpen(true)
  }
  const closeRGPDModal = () => {
    setIsRGPDModalOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsFailModalOpen(false)
  }

  return (
    <section className="mt-96">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mb-[-50px] md:mb-[-150px]" id="contact">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Au boulot ?</h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Vous êtes convaincu et souhaiteriez que nous travaillions ensemble ? À vous de jouer !</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre E-mail</label>
            <input type="email" name="email" className="
            shadow-sm bg-gray-50 border border-gray-300 
            text-sm text-primarycolor rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="vous-savez-quoi-faire@mail.com"
              value={formData.email} onChange={handleChange} required></input>
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Votre nom</label>
            <input type="text" name="name" className="text-primarycolor block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="À qui ai-je l'honneur ?"
              value={formData.name} onChange={handleChange} required></input>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">Votre message</label>
            <textarea name="message" rows="6" className="text-primarycolor block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Comment puis-je vous aider ?"
              value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div>
            <input type="checkbox" id="consentement" name="consentement" required></input>
            <label for="consentement">
              &nbsp;J'accepte que mes données personnelles soient enregistrées et utilisées pour le traitement de ma demande selon les conditions visionnables&nbsp;
              <span className="text-decoration-line: underline cursor-pointer" onClick={openRGPDModal}>ici</span>
            </label>
          </div>
          <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white border-4 rounded-xl bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">C'est parti !</button>
        </form>
      </div>

      {isRGPDModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-primarycolor p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p>Les Informations recueillies par ce formulaire sont enregistrées sous la forme
              d'un courriel envoyé à l'adresse contact@arnoldmasselin.fr et traitées dans le but de prendre connaissance et de répondre
              à la demande formulée par l'utilisateur dans le formulaire.
            </p>
            <p>
              La base légale est l'article 6.1.a du RGPD (consentement).
              Les destinataires de ces données sont le responsable de traitement (Webmaster) ainsi que le sous-traitant opérant la gestion
              du serveur web (O2Switch).
            </p>
            <p>La durée de traitement des données est limitée au temps nécessaire pour traiter votre demande,
              vous pouvez à tout moment demander au responsable de traitement l'accès aux données à caractère personnel,
              la rectification ou l'effacement de celles-ci, ou une limitation du traitement relatif à la personne concernée,
              ou du droit de s'opposer au traitement et du droit à la portabilité des données.
            </p>
            <p>Vous pouvez faire valoir ces droits auprès du responsable de traitement via contact@arnoldmasselin.fr
              ou en introduisant une réclamation auprès d'une autorité de contrôle
            </p>
            <button onClick={closeRGPDModal} className="flex py-2 px-4 border-white border-solid rounded-xl border-2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 mr-auto ml-auto mt-1">Ok</button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-primarycolor p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Message bien reçu !</h3>
            <p className="mb-4 text-center">Merci de m'avoir contacté, je reviendrai vers vous au plus vite</p>
            <button onClick={closeModal} className="flex py-2 px-4 border-white border-solid rounded-xl border-2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 mr-auto ml-auto">Ok</button>
          </div>
        </div>
      )}

      {isFailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-primarycolor p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Oops un problème est survenu...</h3>
            <p className="mb-4 text-center">Vous pouvez me contacter via contact@arnoldmasselin.fr</p>
            <button onClick={closeModal} className="flex py-2 px-4 border-white border-solid rounded-xl border-2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 mr-auto ml-auto">Ok</button>
          </div>
        </div>
      )}

    </section>
  )
}

export default Contact
