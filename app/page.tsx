"use client";  // <-- Ajoutez cette ligne si elle n'est pas encore présente
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";  // Assurez-vous que useState est bien importé
import Head from "next/head";
import { SkillBar } from "react-skillbars"; 
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import emailjs from 'emailjs-com';  


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // Initialisez EmailJS avec votre clé publique
    emailjs.init("1QMjThQ8T3VIZtGti"); // Remplacez 'YOUR_PUBLIC_KEY' par votre clé publique EmailJS
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    // Remplacez 'service_id' et 'template_id' par vos identifiants EmailJS
    emailjs.send(
      'service_rc7871q', // Remplacez par votre ID de service
      'template_ktjs38p', // Remplacez par votre ID de modèle
      templateParams
    ).then(
      (result) => {
        setStatus('Message envoyé avec succès!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setStatus('Erreur lors de l\'envoi du message.');
      }
    );
  };
  const skills = [
    { type: "OUTILS DE SECURITE :SentinelOne,Sekoia,Varonis,Proofpoint,Wazuh,MDE", level: 70 },
    { type: "LANGAGES:Bash,Ansible,Sigma", level: 65 },
    { type: "PLATEFORME CLOUD: AWS,Azur,GCP", level: 65 },
    { type: "SYSTEMES:GNU/Linux(Debian, Ubuntu, Redhat),Windows clients/servers (XP, 7,8, 10, 2008, 2012, 2016", level: 75 },
    { type: "DEVOPS: Ansible, Gitlab CI, Jenkins, Terraform", level: 70 },
    { type: "Linux", level: 95 },
    { type: "MIDDELWARE: Apache,nginx", level: 80 },
    { type: "Anglais", level: 95 },
    { type: "Espagnol", level: 60 },
  ];

  return (
    <div>
      <Head>
        <title>Antony Audic - Portfolio</title>
        <meta name="description" content="Portfolio de Antony Audic, Ingénieur Système en Cybersécurité." />
      </Head>

      <header className="bg-gray-900 text-white p-6 text-center">
        <Image src="/PXL_20240718_095208802.MP.jpg" alt="Antony Audic" width={150} height={150} className="rounded-full mx-auto"/>
        <h1 className="text-3xl font-bold">Antony Audic</h1>
        <p>Ingénieur Système & Cybersécurité</p>
        <p>15 rue Paul Claudel</p>
        <p>06 10 65 98 49</p>
        <p>audic.antony@gmail.com</p>
        <p>Permis de conduire B</p>
        <a
          href="/CV_Antony_Audic.pdf"
          download="CV_Antony_Audic.pdf"
          className="inline-block mt-4 px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-gray-900"
        >
          Télécharger le CV
        </a>
        {/* Lien LinkedIn */}
        <a href="https://www.linkedin.com/in/antony-audic-b51a9a80" target="_blank" className="ml-4">
          <FaLinkedin size={30} className="text-white"/>
        </a>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <section className="my-6">
          <h2 className="text-2xl font-semibold">Profil</h2>
          <p>
            Ingénieur Système ayant travaillé dans  la Cybersécurité sur la création d'un service Security Operation Center. Solides compétences analytiques, compréhension des enjeux sociaux, bonne communication, flexibilité et adaptabilité. Expertise dans l'analyse de code malveillant, la surveillance des incidents de sécurité, ainsi que la gestion des logs et des données de sécurité.
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.type} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="font-medium mb-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                  {skill.type.split(':')[0]}
                </h3>
                <div className="w-full">
                  <SkillBar 
                    skills={[{ type: skill.type.split(':')[1] || skill.type, level: skill.level }]}
                    height={25}
                    animationDelay={0}
                    animationDuration={1000}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Outils de Sécurité</h2>
          <ul className="list-disc list-inside">
            <li>SentinelOne, Sekoia, Varonis</li>
            <li>Proofpoint, Wazuh, MDE</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Langages</h2>
          <ul className="list-disc list-inside">
            <li>Bash, MySQL, Ansible, Python, SIGMA</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Plateformes Cloud</h2>
          <ul className="list-disc list-inside">
            <li>AWS, Azure, GCP</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Systèmes</h2>
          <ul className="list-disc list-inside">
            <li>GNU/Linux (Debian, Ubuntu, Redhat)</li>
            <li>Windows clients/serveurs (XP, 7, 8, 10, 2008, 2012, 2016)</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Protocoles</h2>
          <ul className="list-disc list-inside">
            <li>DNS, SSH, FTP, SFTP, DHCP, HTTP(S), NTP</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Journalisation</h2>
          <ul className="list-disc list-inside">
            <li>Elastic Search, Logstash, Kibana</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">DevOps</h2>
          <ul className="list-disc list-inside">
            <li>Ansible, Gitlab CI, Jenkins, Terraform</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Middleware</h2>
          <ul className="list-disc list-inside">
            <li>Apache, Nginx</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Langues</h2>
          <ul className="list-disc list-inside">
            <li>Espagnol, Anglais, Français</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Expériences Professionnelles</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Consultant SOC - SYNETIS, Cesson-Sévigné</h3>
            <p>Octobre 2022 - Présent</p>
            <ul className="list-disc list-inside">
              <li>Suivi de détection de vulnérabilités, attaques malveillantes</li>
              <li>Utilisation d'outils de sécurité, d'analyse de code malveillant et de gestion des informations et des événements de sécurité (SIEM)</li>
              <li>Maintenance des agents SentinelOne</li>
              <li>Préparation des comités de pilotage clients et animation</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium">Administrateur WebOPS - Claranet, Cesson-Sévigné</h3>
            <p>Janvier 2019 - Octobre 2022</p>
            <ul className="list-disc list-inside">
              <li>Gestion / Architecture de l'infrastructure d'un client grand compte dans le domaine du luxe</li>
              <li>Plateformes Cloud: AWS</li>
              <li>DevOps/GitOps Tools: Ansible, Git, Rundeck</li>
              <li>CI/CD: Azure, GitLab, Bitbucket</li>
              <li>Intégration et optimisation de l'architecture des plateformes clients</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium">Administrateur Backup - Claranet, Cesson-Sévigné</h3>
            <p>2016 - 2018</p>
            <ul className="list-disc list-inside">
              <li>Intégration, maintenance et MCO outils de backups multiplateformes clients (Avamar, Veeam)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium">Administrateur Système et Web - Claranet, Cesson-Sévigné</h3>
            <p>Novembre 2010 - 2015</p>
            <ul className="list-disc list-inside">
              <li>Infogérance de plateformes clients pour des sites de type E-commerce, média / presse</li>
              <li>Traitement de demande de mise en production et préproduction</li>
              <li>Rédaction de documentation</li>
            </ul>
          </div>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Formation</h2>
          <ul className="list-disc list-inside">
            <li>SANS SEC450 Blue Team Fundamentals: Security Operations and Analysis (Décembre 2023)</li>
            <li>SEKOIA.IO Certified Security Analyst 301 (Février 2023)</li>
            <li>BTS TSSI, DIAFOR (Août 2019)</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Loisirs & Hobbies</h2>
          <ul className="list-disc list-inside">
            <li>Voyages</li>
            <li>Musique</li>
            <li>Surf</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded">
              Envoyer
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

