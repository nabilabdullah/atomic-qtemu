import React from 'react'
import Button from '../../atoms/button'

export default function Card({ title, mainText, count, buttonText }) {
  return (
    <div class="col-4">
        <div class="card">
        <h5 class="card-header">{title}</h5>
        <div class="card-body">
            <h5 class="card-title">{mainText}</h5>
            <p class="card-text">{count} <span class="text-warning">went</span></p>
            <Button>{buttonText}</Button>
        </div>
        </div>
    </div>
  )
}
