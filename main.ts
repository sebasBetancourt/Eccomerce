
export class ADSR {
    attack: AudioParam;
    decay: AudioParam;
    sustain: AudioParam;
    release: AudioParam;

    constructor(context: BaseAudioContext) {
        this.attack = context.createGain().gain;
        this.decay = context.createGain().gain;
        this.sustain = context.createGain().gain;
        this.release = context.createGain().gain;
    }
}