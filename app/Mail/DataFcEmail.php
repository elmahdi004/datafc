<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DataFcEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    private $content ;
    public function __construct($content)
    {
        $this->content = $content ;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $obj=(object) $this->content;
        return new Envelope(
            subject: $obj->objet,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $obj=(object) $this->content;
        return new Content(
            view: 'emails.Mail',
            with:[
                'msgEmail' => $obj->message,
                ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
