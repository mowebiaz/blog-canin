import React from 'react'
import { motion, type Variants } from 'motion/react'
import './ServiceCard.scss'

export interface ServicePoint {
  label: string
  text: React.ReactNode
}

export interface ServiceCardProps {
  id?: string
  icon: React.ReactNode
  title: string
  description: string
  points: ServicePoint[]
  price: string
  pack?: string
  variants?: Variants
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  icon,
  title,
  description,
  points,
  price,
  pack,
  variants,
}) => {
  return (
    <motion.article
      id={id}
      className="service-card"
      variants={variants}
    >
      <div
        className="icon-wrapper"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h2 className="service-card__title">{title}</h2>
      <p className="service-card__description">{description}</p>

      <div className="service-card__points">
        {points.map((point, i) => (
          <div
            key={i}
            className="service-card__point"
          >
            <span className="service-card__point-label">{point.label}</span>
            <p className="service-card__point-text">{point.text}</p>
          </div>
        ))}

        <div className="service-card__point">
          <span className="service-card__point-label">Tarif</span>
          <p className="service-card__point-text">{price}</p>
          {pack && <p className="service-card__point-text">{pack}</p>}
        </div>
      </div>
    </motion.article>
  )
}
