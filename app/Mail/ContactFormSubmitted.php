<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Contact $contact)
    {
    }

    public function build()
    {
        return $this->subject('Terima kasih, pesan Anda sudah kami terima')
            ->view('emails.contact-form')
            ->with([
                'name'        => $this->contact->name,
                'subjectText' => $this->contact->subject,
                'messageText' => $this->contact->message,
            ]);
    }
}