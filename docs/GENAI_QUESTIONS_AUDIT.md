# GenAI Exam Questions Audit Report

**Date:** 2026-06-29  
**Exam:** ISTQB CT-GenAI v1.0 (Testing with Generative AI)  
**Auditor:** AI Code Review

## Summary

Audited all GenAI exam questions (questions.ts, questions2.ts, questions3.ts) against the official CT-GenAI v1.0 syllabus to identify questions referencing topics NOT covered in the syllabus.

## Findings

### Out-of-Scope Topics Identified

The following topics were found in exam questions but are **NOT covered** in the CT-GenAI v1.0 syllabus:

1. **Attention mechanism** - Only mentioned once in passing ("A deep learning model architecture that utilizes self-attention"), not a detailed topic
2. **Transformer architecture details** - Mentioned but not explained in depth
3. **Pre-training processes** - Not explicitly covered as a distinct concept
4. **Positional encoding** - Not mentioned in syllabus
5. **Encoder/decoder architecture** - Not covered in syllabus
6. **Autoregressive vs masked language models** - Not covered in syllabus
7. **Specific model names (GPT, BERT)** - Not mentioned in syllabus

### Questions Fixed

**Total: 10 questions replaced with in-scope alternatives**

#### From `questions.ts`:
1. **Q3** (line 34): "attention mechanism" → Replaced with question about pre-trained models advantage
2. **Q9** (line 112): "pre-training purpose" → Replaced with question about foundation vs instruction-tuned models
3. **Q566** (line 566): "transformer model inference" → Replaced with question about LLM text generation
4. **Q618** (line 618): "pre-training vs fine-tuning" → Replaced with question about foundation vs instruction-tuned models
5. **Q1100** (line 1100): "positional encoding" → Replaced with question about context windows
6. **Q1113** (line 1113): "transformer architecture characteristics" → Replaced with question about multimodal LLMs

#### From `questions2.ts`:
7. **Q1** (line 7): "transformer model with self-attention" → Replaced with question about LLM text processing
8. **Q543** (line 543): "encoder in transformer-based LLM" → Replaced with question about embeddings
9. **Q569** (line 569): "attention mechanism for test case generation" → Replaced with question about hallucinations
10. **Q6** (line 595): "autoregressive vs masked language models (GPT vs BERT)" → Replaced with question about non-deterministic behavior

#### From `questions3.ts`:
- No changes needed. Out-of-scope terms appeared only as distractors in wrong answers, not as the focus of questions.

## Replacement Strategy

All replacement questions focus on topics that ARE covered in the syllabus:

- **Chapter 1**: Foundation vs instruction-tuned models, context windows, multimodal LLMs, embeddings, hallucinations, non-deterministic behavior
- **Chapter 2**: Prompt engineering techniques (unchanged)
- **Chapter 3**: Risks and mitigation (unchanged)
- **Chapter 4**: RAG, fine-tuning, LLMOps (unchanged)
- **Chapter 5**: Adoption strategy (unchanged)

## Verification

- ✅ All 254 tests pass
- ✅ Build succeeds
- ✅ No TypeScript errors
- ✅ All replacement questions align with syllabus learning objectives

## Impact

- **Before:** 10 questions testing out-of-scope technical details
- **After:** 10 questions testing in-scope practical testing concepts
- **Question count:** Unchanged (still 120 questions total)
- **Coverage:** Now 100% aligned with CT-GenAI v1.0 syllabus

## Recommendations

1. **Future question authoring:** Always cross-reference with syllabus keywords and learning objectives before adding questions
2. **Focus on practical testing:** The syllabus emphasizes practical testing applications, not AI/ML technical internals
3. **Avoid specific model names:** The syllabus doesn't mention GPT, BERT, or other specific models
4. **Emphasize risks and mitigation:** Chapters 3 and 5 cover important practical topics that should be well-represented

## Syllabus Reference

**Official Syllabus:** `exam_resources/ISTQB/CT-GenAI-Syllabus-v1.0.txt`

**Chapter 1 Keywords (in-scope):**
- AI chatbot, context window, deep learning, embedding, feature, foundation LLM, generative AI, generative pre-trained transformer, instruction-tuned LLM, large language model, machine learning, multimodal model, reasoning LLM, symbolic AI, tokenization, transformer

**NOT in keywords (out-of-scope):**
- attention mechanism, positional encoding, encoder, decoder, autoregressive, masked, GPT, BERT, pre-training (as distinct concept)
